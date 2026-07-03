-- ============================================
-- PARAMÈTRES RESTAURANT (logo / photo de profil)
-- ============================================

-- Table paramètres (une seule ligne)
CREATE TABLE IF NOT EXISTS public.parametres (
  id            INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1), -- force une seule ligne
  nom_restaurant TEXT DEFAULT 'Limoncello',
  logo_url      TEXT,
  adresse       TEXT DEFAULT '20 Avenue Tombalbaye, Gombe, Kinshasa, RDC',
  telephone     TEXT DEFAULT '+243 815 141 111',
  whatsapp      TEXT DEFAULT '243815141111',
  horaires      TEXT DEFAULT 'Lun 12h30-22h · Mar Fermé · Mer 12h30-18h30 · Jeu 12h30-22h · Ven 12h30-22h30 · Sam 12h-00h · Dim 12h30-22h',
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Ligne unique par défaut
INSERT INTO public.parametres (id, nom_restaurant, logo_url, adresse, telephone, whatsapp, horaires)
VALUES (1, 'Limoncello', NULL, '20 Avenue Tombalbaye, Gombe, Kinshasa, RDC', '+243 815 141 111', '243815141111', 'Lun 12h30-22h · Mar Fermé · Mer 12h30-18h30 · Jeu 12h30-22h · Ven 12h30-22h30 · Sam 12h-00h · Dim 12h30-22h')
ON CONFLICT (id) DO NOTHING;

-- Trigger updated_at
CREATE TRIGGER trg_parametres_updated_at
  BEFORE UPDATE ON public.parametres
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- RLS
ALTER TABLE public.parametres ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lecture_publique_parametres" ON public.parametres FOR SELECT USING (true);
CREATE POLICY "admin_update_parametres" ON public.parametres FOR UPDATE
  USING (auth.role() = 'service_role' OR auth.uid() IN (SELECT id FROM public.admin_profiles));

-- ============================================
-- STORAGE : bucket pour les images (logo + produits)
-- ============================================

INSERT INTO storage.buckets (id, name, public)
VALUES ('menu-images', 'menu-images', true)
ON CONFLICT (id) DO NOTHING;

-- Lecture publique des images
CREATE POLICY "lecture_publique_images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'menu-images');

-- Upload réservé aux admins connectés
CREATE POLICY "upload_admin_images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'menu-images'
    AND auth.uid() IN (SELECT id FROM public.admin_profiles)
  );

-- Suppression/modif réservée aux admins
CREATE POLICY "update_admin_images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'menu-images' AND auth.uid() IN (SELECT id FROM public.admin_profiles));

CREATE POLICY "delete_admin_images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'menu-images' AND auth.uid() IN (SELECT id FROM public.admin_profiles));

SELECT 'Table parametres + bucket menu-images créés ✅' AS status;
