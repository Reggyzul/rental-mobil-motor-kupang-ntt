import React, { useState, useRef, useCallback } from 'react';
import {
  LayoutDashboard, Building2, Image, Car, MapPin, Palmtree, Star,
  LogOut, ChevronRight, Save, Plus, Trash2, Upload, X, Check,
  Wifi, WifiOff, RefreshCw, Menu, Home, Eye, AlertCircle
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useData } from '../../context/DataContext';
import type { CarRow, RouteRow, TourRow, TestimonialRow } from '../../lib/supabase';

type Section = 'overview' | 'business' | 'hero' | 'cars' | 'routes' | 'tours' | 'testimonials' | 'setup';

function ImageUploader({
  currentUrl, onUploaded, folder = 'general', label = 'Gambar'
}: {
  currentUrl: string; onUploaded: (url: string) => void; folder?: string; label?: string;
}) {
  const { uploadImageToStorage } = useData();
  const ref = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUrl);
  const [urlInput, setUrlInput] = useState('');
  const [error, setError] = useState('');

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) { setError('File harus berupa gambar'); return; }
    setUploading(true); setError('');
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
    const uploadedUrl = await uploadImageToStorage(file, folder);
    if (uploadedUrl) {
      onUploaded(uploadedUrl);
      setPreview(uploadedUrl);
    } else {
      setError('Gagal upload. Pastikan bucket "srm-images" sudah dibuat di Supabase Storage.');
      setPreview(currentUrl);
    }
    setUploading(false);
  }, [uploadImageToStorage, folder, onUploaded, currentUrl]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleUrlSave = () => {
    if (urlInput.trim()) {
      setPreview(urlInput.trim());
      onUploaded(urlInput.trim());
      setUrlInput('');
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
      {/* Preview */}
      <div className="relative w-full h-44 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center group"
        onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}
      >
        {preview ? (
          <>
            <img src={preview} alt="Preview" className="w-full h-full object-cover" onError={() => setPreview('')} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button onClick={() => ref.current?.click()} className="bg-white text-slate-800 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-sky-50">
                <Upload className="w-3.5 h-3.5" /> Ganti Foto
              </button>
            </div>
          </>
        ) : (
          <button onClick={() => ref.current?.click()} className="flex flex-col items-center gap-2 text-slate-400 cursor-pointer hover:text-sky-600 transition-colors">
            <Upload className="w-8 h-8" />
            <span className="text-xs font-bold">Upload Gambar</span>
            <span className="text-[11px]">JPG, PNG, WEBP (Drag & Drop)</span>
          </button>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="w-6 h-6 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
      <input ref={ref} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text" placeholder="Atau paste URL gambar..." value={urlInput} onChange={(e) => setUrlInput(e.target.value)}
          className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <button onClick={handleUrlSave} className="bg-sky-600 text-white px-3 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-sky-500 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> OK
        </button>
      </div>
      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
    </div>
  );
}

function SaveButton({ onClick, saving }: { onClick: () => void; saving: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={saving}
      className="bg-sky-600 hover:bg-sky-500 disabled:bg-slate-300 text-white font-bold text-sm px-6 py-2.5 rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
    >
      {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
      {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
    </button>
  );
}

// ─── SECTION PANELS ─────────────────────────────────────────────────────────

function OverviewPanel() {
  const { cars, routes, tours, testimonials, isConnected, lastPing, refreshData, isLoading } = useData();
  const stats = [
    { label: 'Armada Mobil', value: cars.length, icon: Car, color: 'sky' },
    { label: 'Rute PP', value: routes.length, icon: MapPin, color: 'emerald' },
    { label: 'Destinasi Wisata', value: tours.length, icon: Palmtree, color: 'amber' },
    { label: 'Testimoni', value: testimonials.length, icon: Star, color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Dashboard Overview</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Ringkasan konten website CV SRM MANDIRI</p>
      </div>

      {/* Connection Status */}
      <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${isConnected ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
        {isConnected ? <Wifi className="w-4 h-4 shrink-0" /> : <WifiOff className="w-4 h-4 shrink-0" />}
        <div className="flex-1">
          <p className="text-sm font-bold">{isConnected ? '✅ Terhubung ke Supabase' : '⚠️ Belum terhubung ke Supabase'}</p>
          {isConnected && <p className="text-xs font-medium opacity-80">Terakhir sync: {lastPing || 'baru saja'}</p>}
          {!isConnected && <p className="text-xs font-medium opacity-80">Jalankan SQL schema di Supabase terlebih dahulu</p>}
        </div>
        <button onClick={refreshData} disabled={isLoading} className="bg-white/80 hover:bg-white border px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors">
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-black text-slate-800">{s.value}</p>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
        <h3 className="font-bold text-sky-800 text-sm mb-3">🚀 Mulai Edit Website</h3>
        <div className="text-sm text-sky-700 space-y-1.5 font-medium">
          <p>• Pilih menu di sebelah kiri untuk mengedit bagian yang ingin diubah</p>
          <p>• Foto dapat diunggah langsung dari komputer atau paste URL gambar</p>
          <p>• Setiap perubahan tersimpan otomatis ke Supabase & langsung tampil di website</p>
        </div>
      </div>

      {/* Keep-alive info */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-bold text-amber-800 text-sm mb-2">⏰ Sistem Keep-Alive Aktif</h3>
        <p className="text-xs text-amber-700 font-medium">Dashboard ini otomatis melakukan ping ke Supabase setiap 30 menit saat dibuka, sehingga proyek Supabase free Anda tidak akan dinonaktifkan. GitHub Action juga berjalan setiap 2 hari untuk jaga-jaga.</p>
      </div>
    </div>
  );
}

function BusinessPanel() {
  const { getSiteValue, updateSiteContent } = useData();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [fields, setFields] = useState({
    business_name: getSiteValue('business_name'),
    business_tagline: getSiteValue('business_tagline'),
    business_description: getSiteValue('business_description'),
    contact_wa1: getSiteValue('contact_wa1'),
    contact_phone2: getSiteValue('contact_phone2'),
    contact_tiktok: getSiteValue('contact_tiktok'),
    contact_address: getSiteValue('contact_address'),
  });

  const handleSave = async () => {
    setSaving(true);
    await Promise.all(Object.entries(fields).map(([k, v]) => updateSiteContent(k, v)));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Informasi Bisnis</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit nama bisnis, tagline, kontak, dan alamat</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-5">
        {[
          { key: 'business_name', label: 'Nama Bisnis', placeholder: 'CV SRM MANDIRI' },
          { key: 'business_tagline', label: 'Tagline / Slogan Hero', placeholder: 'Melayani Perjalanan Anda Sepenuh Hati' },
        ].map(({ key, label, placeholder }) => (
          <div key={key} className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
            <input
              type="text" value={fields[key as keyof typeof fields]} placeholder={placeholder}
              onChange={(e) => setFields(f => ({ ...f, [key]: e.target.value }))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800"
            />
          </div>
        ))}

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Deskripsi Bisnis</label>
          <textarea
            value={fields.business_description} rows={3}
            onChange={(e) => setFields(f => ({ ...f, business_description: e.target.value }))}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800 resize-none"
          />
        </div>

        <div className="border-t border-slate-100 pt-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">Kontak & Media Sosial</h3>
          {[
            { key: 'contact_wa1', label: '📱 WhatsApp Admin 1 (tanpa +62)', placeholder: '085270607796' },
            { key: 'contact_phone2', label: '📞 Telepon Admin 2 (tanpa +62)', placeholder: '081262320086' },
            { key: 'contact_tiktok', label: '🎵 Username TikTok', placeholder: '@hendry.manullang' },
            { key: 'contact_address', label: '📍 Alamat Kantor', placeholder: 'Simalingkar B, Medan, Sumatera Utara' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              <input
                type="text" value={fields[key as keyof typeof fields]} placeholder={placeholder}
                onChange={(e) => setFields(f => ({ ...f, [key]: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <SaveButton onClick={handleSave} saving={saving} />
          {saved && <span className="text-emerald-600 text-sm font-bold flex items-center gap-1"><Check className="w-4 h-4" /> Tersimpan!</span>}
        </div>
      </div>
    </div>
  );
}

function HeroPanel() {
  const { getSiteValue, updateSiteContent } = useData();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [heroImage, setHeroImage] = useState(getSiteValue('hero_image'));
  const [logoImage, setLogoImage] = useState(getSiteValue('logo_image'));
  const [seoTitle, setSeoTitle] = useState(getSiteValue('seo_title'));
  const [seoDesc, setSeoDesc] = useState(getSiteValue('seo_description'));

  const handleSave = async () => {
    setSaving(true);
    await Promise.all([
      updateSiteContent('hero_image', heroImage),
      updateSiteContent('logo_image', logoImage),
      updateSiteContent('seo_title', seoTitle),
      updateSiteContent('seo_description', seoDesc),
    ]);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Hero & Logo</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Ubah foto background hero, logo perusahaan, dan pengaturan SEO</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
        <ImageUploader
          currentUrl={heroImage} folder="hero" label="🖼️ Foto Background Hero (Banner Utama)"
          onUploaded={(url) => setHeroImage(url)}
        />
        <ImageUploader
          currentUrl={logoImage} folder="logo" label="🏢 Logo Perusahaan"
          onUploaded={(url) => setLogoImage(url)}
        />

        <div className="border-t border-slate-100 pt-5 space-y-4">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">SEO (Mesin Pencari)</h3>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Judul Halaman (Tab Browser)</label>
            <input type="text" value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Meta Deskripsi (Cuplikan di Google)</label>
            <textarea value={seoDesc} rows={2} onChange={(e) => setSeoDesc(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium text-slate-800 resize-none" />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <SaveButton onClick={handleSave} saving={saving} />
          {saved && <span className="text-emerald-600 text-sm font-bold flex items-center gap-1"><Check className="w-4 h-4" /> Tersimpan!</span>}
        </div>
      </div>
    </div>
  );
}

function CarsPanel() {
  const { cars, saveCar, deleteCar } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [editFields, setEditFields] = useState<Partial<CarRow>>({});

  const startEdit = (car: CarRow) => {
    setEditingId(car.id);
    setEditFields({ ...car });
  };

  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveCar({ ...editFields, id: editingId } as CarRow);
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Armada Mobil</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit informasi, harga, dan foto setiap kendaraan</p>
      </div>

      <div className="space-y-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {editingId === car.id ? (
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">{car.name}</h3>
                  <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
                </div>

                <ImageUploader
                  currentUrl={editFields.image || car.image} folder="cars" label="Foto Mobil"
                  onUploaded={(url) => setEditFields(f => ({ ...f, image: url }))}
                />

                {[
                  { key: 'name', label: 'Nama Mobil' },
                  { key: 'category', label: 'Kategori' },
                  { key: 'price_display', label: 'Harga Tampil (contoh: Rp700.000)' },
                  { key: 'transmission', label: 'Transmisi' },
                  { key: 'fuel', label: 'Bahan Bakar' },
                ].map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input
                      type="text" value={String(editFields[key as keyof CarRow] ?? '')}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deskripsi</label>
                  <textarea value={editFields.description ?? ''} rows={3}
                    onChange={(e) => setEditFields(f => ({ ...f, description: e.target.value }))}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <SaveButton onClick={handleSave} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2.5 rounded-2xl border border-slate-200 text-slate-600 text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <img src={car.image} alt={car.name} className="w-20 h-14 object-cover rounded-xl shrink-0 bg-slate-100" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x56/e2e8f0/94a3b8?text=No+Image'; }} />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{car.name}</p>
                  <p className="text-xs text-slate-500 font-medium">{car.category}</p>
                  <p className="text-xs text-sky-600 font-bold mt-0.5">{car.price_display}</p>
                </div>
                <button onClick={() => startEdit(car)} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2 rounded-xl border border-sky-200 cursor-pointer flex items-center gap-1.5">
                  ✏️ Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoutesPanel() {
  const { routes, saveRoute, deleteRoute } = useData();
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newRoute, setNewRoute] = useState({ title: '', to_city: '', region: '', note: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<Partial<RouteRow>>({});

  const handleAdd = async () => {
    if (!newRoute.title || !newRoute.to_city) return;
    setSaving(true);
    await saveRoute({ ...newRoute, from_city: 'Medan', is_active: true, sort_order: routes.length + 1 });
    setNewRoute({ title: '', to_city: '', region: '', note: '' });
    setShowAdd(false);
    setSaving(false);
  };

  const handleSaveEdit = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveRoute({ ...editFields, id: editingId, title: editFields.title || '', to_city: editFields.to_city || '' });
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-800">Rute PP (Antar Kota)</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Kelola rute Pulang-Pergi yang ditampilkan di website</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
          <Plus className="w-4 h-4" /> Tambah Rute
        </button>
      </div>

      {showAdd && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-sky-800 text-sm">➕ Tambah Rute Baru</h3>
          {[
            { key: 'title', label: 'Judul Rute', placeholder: 'Medan - Pematangsiantar (PP)' },
            { key: 'to_city', label: 'Kota Tujuan', placeholder: 'Pematangsiantar' },
            { key: 'region', label: 'Provinsi', placeholder: 'Sumatera Utara' },
            { key: 'note', label: 'Keterangan Singkat', placeholder: 'Jalur wisata & kota pelajar' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              <input type="text" value={newRoute[key as keyof typeof newRoute]} placeholder={placeholder}
                onChange={(e) => setNewRoute(f => ({ ...f, [key]: e.target.value }))}
                className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
              />
            </div>
          ))}
          <div className="flex gap-3">
            <SaveButton onClick={handleAdd} saving={saving} />
            <button onClick={() => setShowAdd(false)} className="px-5 py-2.5 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {routes.map((route, idx) => (
          <div key={route.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm">
            {editingId === route.id ? (
              <div className="p-4 space-y-3">
                {[
                  { key: 'title', label: 'Judul Rute', placeholder: 'Medan - Dumai (PP)' },
                  { key: 'to_city', label: 'Kota Tujuan' },
                  { key: 'region', label: 'Provinsi' },
                  { key: 'note', label: 'Keterangan' },
                ].map(({ key, label, placeholder }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input type="text" value={String(editFields[key as keyof RouteRow] ?? '')} placeholder={placeholder}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}
                <div className="flex gap-3">
                  <SaveButton onClick={handleSaveEdit} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 font-black text-sm flex items-center justify-center shrink-0">{idx + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{route.title}</p>
                  <p className="text-xs text-slate-500 font-medium">{route.region} • {route.note}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setEditingId(route.id); setEditFields({ ...route }); }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-sky-200 cursor-pointer">✏️</button>
                  <button onClick={() => deleteRoute(route.id)} className="bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs px-3 py-1.5 rounded-xl border border-red-200 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ToursPanel() {
  const { tours, saveTour, deleteTour } = useData();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFields, setEditFields] = useState<Partial<TourRow>>({});
  const [saving, setSaving] = useState(false);

  const startEdit = (tour: TourRow) => { setEditingId(tour.id); setEditFields({ ...tour }); };

  const handleSave = async () => {
    if (!editingId) return;
    setSaving(true);
    await saveTour({ ...editFields, id: editingId } as TourRow);
    setSaving(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Destinasi Wisata</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Edit paket wisata, foto, dan deskripsi destinasi</p>
      </div>

      <div className="space-y-4">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {editingId === tour.id ? (
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-slate-800">{tour.title}</h3>
                  <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer"><X className="w-5 h-5" /></button>
                </div>
                <ImageUploader
                  currentUrl={editFields.image || tour.image} folder="tours" label="Foto Destinasi"
                  onUploaded={(url) => setEditFields(f => ({ ...f, image: url }))}
                />
                {[
                  { key: 'title', label: 'Nama Destinasi' },
                  { key: 'location', label: 'Lokasi Lengkap' },
                  { key: 'duration', label: 'Durasi Wisata' },
                  { key: 'badge', label: 'Label Badge' },
                  { key: 'route_display', label: 'Tampilan Rute' },
                ].map(({ key, label }) => (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
                    <input type="text" value={String(editFields[key as keyof TourRow] ?? '')}
                      onChange={(e) => setEditFields(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                    />
                  </div>
                ))}
                <div className="flex gap-3">
                  <SaveButton onClick={handleSave} saving={saving} />
                  <button onClick={() => setEditingId(null)} className="px-5 py-2.5 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 p-4">
                <img src={tour.image} alt={tour.title} className="w-20 h-14 object-cover rounded-xl shrink-0 bg-slate-100" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/80x56/e2e8f0/94a3b8?text=No+Image'; }} />
                <div className="flex-1 min-w-0">
                  <p className="font-black text-slate-800 text-sm">{tour.title}</p>
                  <p className="text-xs text-slate-500 font-medium">{tour.location}</p>
                  <p className="text-xs text-sky-600 font-bold mt-0.5">{tour.duration}</p>
                </div>
                <button onClick={() => startEdit(tour)} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs px-4 py-2 rounded-xl border border-sky-200 cursor-pointer">✏️ Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsPanel() {
  const { testimonials, saveTestimonial, deleteTestimonial } = useData();
  const [showAdd, setShowAdd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newTesti, setNewTesti] = useState({ name: '', role_id: '', text_id: '', car_model: '', date_label: '', rating: 5, image: '', is_active: true });

  const handleAdd = async () => {
    if (!newTesti.name) return;
    setSaving(true);
    await saveTestimonial({ ...newTesti, sort_order: testimonials.length + 1 });
    setNewTesti({ name: '', role_id: '', text_id: '', car_model: '', date_label: '', rating: 5, image: '', is_active: true });
    setShowAdd(false);
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-800">Testimoni Pelanggan</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Kelola ulasan dan testimoni pelanggan</p>
        </div>
        <button onClick={() => setShowAdd(!showAdd)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-4 py-2 rounded-2xl flex items-center gap-2 cursor-pointer">
          <Plus className="w-4 h-4" /> Tambah
        </button>
      </div>

      {showAdd && (
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-4">
          <h3 className="font-bold text-sky-800 text-sm">➕ Tambah Testimoni</h3>
          {[
            { key: 'name', label: 'Nama Pelanggan', placeholder: 'Bpk. Budi Santoso' },
            { key: 'role_id', label: 'Jenis Perjalanan', placeholder: 'Carter Medan - Pekanbaru PP' },
            { key: 'text_id', label: 'Komentar', placeholder: 'Pelayanan sangat memuaskan...' },
            { key: 'car_model', label: 'Armada yang Disewa', placeholder: 'Toyota Innova' },
            { key: 'date_label', label: 'Tanggal', placeholder: 'Agustus 2026' },
            { key: 'image', label: 'URL Foto Profil (opsional)', placeholder: 'https://...' },
          ].map(({ key, label, placeholder }) => (
            <div key={key} className="space-y-1">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">{label}</label>
              {key === 'text_id' ? (
                <textarea placeholder={placeholder} value={newTesti[key as keyof typeof newTesti] as string} rows={2}
                  onChange={(e) => setNewTesti(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium resize-none"
                />
              ) : (
                <input type="text" placeholder={placeholder} value={String(newTesti[key as keyof typeof newTesti])}
                  onChange={(e) => setNewTesti(f => ({ ...f, [key]: e.target.value }))}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm font-medium"
                />
              )}
            </div>
          ))}
          <div className="flex gap-3">
            <SaveButton onClick={handleAdd} saving={saving} />
            <button onClick={() => setShowAdd(false)} className="px-5 py-2 rounded-2xl border text-sm font-bold cursor-pointer hover:bg-slate-50">Batal</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-start gap-4">
            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-2xl object-cover bg-slate-100 shrink-0" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=e0f2fe&color=0369a1`; }} />
            <div className="flex-1 min-w-0">
              <p className="font-black text-slate-800 text-sm">{t.name}</p>
              <p className="text-xs text-sky-600 font-bold">{t.car_model} • {t.date_label}</p>
              <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">{t.text_id}</p>
            </div>
            <button onClick={() => deleteTestimonial(t.id)} className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-xl border border-red-200 cursor-pointer shrink-0">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SetupPanel() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const res = await fetch('/supabase_schema.sql');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.open('https://supabase.com/dashboard', '_blank');
    }
  };

  const steps = [
    { n: 1, title: 'Buka Supabase Dashboard', desc: 'Kunjungi supabase.com/dashboard dan login ke proyek Anda' },
    { n: 2, title: 'Buka SQL Editor', desc: 'Klik "SQL Editor" di sidebar kiri Supabase Dashboard' },
    { n: 3, title: 'New Query & Paste SQL', desc: 'Klik "+ New Query", paste SQL yang telah disalin, lalu klik "Run"' },
    { n: 4, title: 'Selesai! Refresh Dashboard', desc: 'Kembali ke sini dan klik "Refresh" di Overview untuk verifikasi' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-slate-800">Setup Database</h2>
        <p className="text-sm text-slate-500 font-medium mt-1">Panduan untuk mengaktifkan koneksi Supabase pertama kali</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-800 text-sm">Diperlukan hanya sekali saja!</h3>
            <p className="text-xs text-amber-700 font-medium mt-1">Jalankan SQL schema di Supabase untuk membuat tabel dan mengisi data awal. Setelah itu, semua konten bisa diedit dari dashboard ini tanpa coding.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.n} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-sm flex items-center justify-center shrink-0">{step.n}</div>
            <div>
              <p className="font-bold text-slate-800 text-sm">{step.title}</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button onClick={handleCopy} className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3 rounded-2xl flex items-center gap-2 cursor-pointer shadow-md">
          {copied ? <><Check className="w-4 h-4" /> Disalin!</> : <><Upload className="w-4 h-4" /> Salin SQL Schema</>}
        </button>
        <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer"
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-6 py-3 rounded-2xl flex items-center gap-2 cursor-pointer">
          <Eye className="w-4 h-4" /> Buka Supabase
        </a>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD ──────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [section, setSection] = useState<Section>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const navItems: { id: Section; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'business', label: 'Info Bisnis', icon: Building2 },
    { id: 'hero', label: 'Hero & Logo', icon: Image },
    { id: 'cars', label: 'Armada Mobil', icon: Car },
    { id: 'routes', label: 'Rute PP', icon: MapPin },
    { id: 'tours', label: 'Destinasi Wisata', icon: Palmtree },
    { id: 'testimonials', label: 'Testimoni', icon: Star },
    { id: 'setup', label: 'Setup Database', icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* ── Sidebar ── */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-0 lg:w-16'} shrink-0 transition-all duration-300 bg-white border-r border-slate-100 shadow-sm flex flex-col overflow-hidden relative z-20`}>
        {/* Logo */}
        <div className="px-4 py-5 flex items-center gap-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center shrink-0">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </div>
          {sidebarOpen && (
            <div>
              <p className="font-black text-slate-800 text-sm leading-tight">SRM MANDIRI</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                section === id ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-sky-700'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {sidebarOpen && <span className="truncate">{label}</span>}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-slate-100 space-y-2">
          <a href="/" target="_blank" rel="noreferrer" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 cursor-pointer">
            <Home className="w-4 h-4 shrink-0" />
            {sidebarOpen && <span>Lihat Website</span>}
          </a>
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold text-red-600 hover:bg-red-50 cursor-pointer">
            <LogOut className="w-4 h-4 shrink-0" />
            {sidebarOpen && <span>Keluar</span>}
          </button>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-100 px-4 sm:px-6 py-4 flex items-center gap-4 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-500 hover:text-sky-600 cursor-pointer p-1 rounded-lg hover:bg-slate-50">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <h1 className="text-sm font-black text-slate-800 uppercase tracking-wide">
              {navItems.find(n => n.id === section)?.label || 'Dashboard'}
            </h1>
          </div>
          <a href="/" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:underline">
            <Eye className="w-3.5 h-3.5" /> Lihat Website
          </a>
          <button onClick={handleLogout} className="bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs px-3 py-1.5 rounded-xl border border-red-200 cursor-pointer flex items-center gap-1">
            <LogOut className="w-3.5 h-3.5" /> Keluar
          </button>
        </header>

        {/* Section Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {section === 'overview' && <OverviewPanel />}
            {section === 'business' && <BusinessPanel />}
            {section === 'hero' && <HeroPanel />}
            {section === 'cars' && <CarsPanel />}
            {section === 'routes' && <RoutesPanel />}
            {section === 'tours' && <ToursPanel />}
            {section === 'testimonials' && <TestimonialsPanel />}
            {section === 'setup' && <SetupPanel />}
          </div>
        </main>
      </div>
    </div>
  );
}
