import React, { useState } from "react";
import { motion } from "framer-motion";

const imagenes = [
  "/img/IMG1.JPG", "/img/IMG2.JPG", "/img/IMG3.JPG", "/img/IMG4.JPG", "/img/IMG5.JPG",
  "/img/IMG6.JPG", "/img/IMG7.JPG", "/img/IMG8.JPG", "/img/IMG9.JPG", "/img/IMG10.JPG",
  "/img/IMG11.JPG", "/img/IMG12.JPG", "/img/IMG13.JPG", "/img/IMG14.JPG", "/img/IMG15.JPG","/img/IMG16.JPG",
];

const videos = [
    {
    src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/20250418_224153.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvMjAyNTA0MThfMjI0MTUzLm1wNCIsImlhdCI6MTc0NzY0Nzc0MiwiZXhwIjoxOTA1MzI3NzQyfQ.vL7U9WESw1cYAAAMO2zrdFKeRLJJQkQ2HMCelm0mn38"
  },
    { src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/20250418_222848.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvMjAyNTA0MThfMjIyODQ4Lm1wNCIsImlhdCI6MTc0NzY0Nzc2MCwiZXhwIjoxOTA1MzI3NzYwfQ.BHyzN58uBu3Pp08Nbj1f_4jG5gXaFYih0bpUzNxFPEo" },
{src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/20250502_235326.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvMjAyNTA1MDJfMjM1MzI2Lm1wNCIsImlhdCI6MTc0NzY0ODQzOSwiZXhwIjoxOTA1MzI4NDM5fQ.Yavu-aED_vRqje2Xo339AUUVOhGWyw4u0_-wIEpBGCs"},
 { src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/MVI_3141.MOV?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvTVZJXzMxNDEuTU9WIiwiaWF0IjoxNzQ3NjQ3MjIwLCJleHAiOjE5MDUzMjcyMjB9.1Q493GVG9MfCI76qixENj4yTwIcbVzndjqQHIQo4gE0" },
  { src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/Videodesdearriba.MP4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvVmlkZW9kZXNkZWFycmliYS5NUDQiLCJpYXQiOjE3NDc2NDcyNzAsImV4cCI6MTkwNTMyNzI3MH0.qxTmirV3RWLuTzVrBxn_X9lgi4AEeJ4tPt2lXAHkE7s" }, 
  { src: "https://uakpiyfdezrdrgshnnde.supabase.co/storage/v1/object/sign/videos/videofondo2%20(1).mov?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2RkZWQxMGI3LWY3OGItNDNkNS1hYzE4LTUxN2U0MWRjNmVkMyJ9.eyJ1cmwiOiJ2aWRlb3MvdmlkZW9mb25kbzIgKDEpLm1vdiIsImlhdCI6MTc0NzY0NzI5MiwiZXhwIjoxOTA1MzI3MjkyfQ.z5nctZDjravDav2VmBSpWQdHgM2IND62dfVTmFKz_iQ" }, 
];

const Galeria = () => {
  const [imagenActiva, setImagenActiva] = useState(null);
  const abrirImagen = (src) => setImagenActiva(src);
  const cerrarImagen = () => setImagenActiva(null);

  return (
    <div className="relative min-h-screen bg-black text-white font-orbitron px-4 py-12 z-10 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: `url('/assets/img/texturaasfalto.jpg')` }}></div>

      {/* Galería de Fotos */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold text-red-800 mb-10"
      >
        Galería de Fotos y vídeos
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-10 relative">
        {imagenes.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-xl border-2 border-red-800 bg-neutral-900 shadow-lg hover:shadow-red-800/30 transition"
          >
            <img
              src={src}
              alt={`img-${i}`}
              onClick={() => abrirImagen(src)}
              className="w-full h-40 object-cover rounded-md cursor-pointer"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay Imagen */}
      {imagenActiva && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={cerrarImagen}
        >
          <img
            src={imagenActiva}
            alt="ampliada"
            className="max-w-[90%] max-h-[90%] rounded-xl border-4 border-red-800 shadow-2xl"
          />
        </div>
      )}

      {/* Galería de Videos */}
      <h2 className="text-center text-4xl font-bold text-red-800 mt-20 mb-10">
        Galería de Videos
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <div
            key={i}
            className="bg-neutral-900 border-2 border-red-800 p-4 rounded-lg shadow-lg"
          >
            <video controls className="w-full rounded-md">
              <source src={v.src} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
