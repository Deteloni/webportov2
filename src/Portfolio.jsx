import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-10">
      {/* Hero Section */}
      <section className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2"
        >
          Nama Kamu
        </motion.h1>
        <p className="text-lg text-gray-500">
          System Analyst & Digital Forensics Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tentang Saya</h2>
        <Card>
          <CardContent className="p-4 text-gray-700">
            Saya adalah profesional IT dengan pengalaman di bidang Laravel, Excel VBA, keamanan jaringan,
            digital forensik, serta pengembangan aplikasi berbasis desktop dan web. Berpengalaman dalam
            analisis forensik, administrasi jaringan, serta pengembangan solusi infrastruktur dan keamanan cloud.
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Keahlian</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          <li>Laravel (Backend & Frontend)</li>
          <li>Excel VBA Programming</li>
          <li>Firewall & Network Security</li>
          <li>Digital Forensics</li>
          <li>Kali Linux, Debian Server</li>
          <li>Go, MySQL (XAMPP)</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Proyek</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Smart Inventory</h3>
              <p className="text-gray-700">Aplikasi inventory pintar untuk monitoring stok dan alur barang di pabrik.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Aplikasi PDF & Excel</h3>
              <p className="text-gray-700">Aplikasi desktop untuk upload Excel ke database dan gabung PDF berdasarkan baris Excel.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Investigasi USB Forensik</h3>
              <p className="text-gray-700">Analisis artefak digital dari USB dengan Kali Linux dan alat forensik.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Forensik Cloud Multi-Cloud</h3>
              <p className="text-gray-700">Proyek riset cloud forensik dan keamanan antar cloud di perusahaan.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Kontak</h2>
        <div className="space-y-2 text-gray-700">
          <p>Email: <a href="mailto:kamu@email.com" className="text-blue-600">kamu@email.com</a></p>
          <p>GitHub: <a href="https://github.com/Deteloni" className="text-blue-600">github.com/Deteloni</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/supriyadi-supriyadi-92a841296" className="text-blue-600">linkedin.com/in/supriyadi</a></p>
          <p>YouTube: <a href="https://youtu.be/TJ2dx7BGqjc" className="text-blue-600">Lihat Video Project</a></p>
        </div>
      </section>
    </main>
  );
}
