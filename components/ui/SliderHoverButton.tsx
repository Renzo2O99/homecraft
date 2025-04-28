import React from 'react'; // Importar React
import { twMerge } from "tailwind-merge";

// Asumiendo una interfaz similar a esta (añadiendo ButtonHTMLAttributes)
interface SlideHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function SlideHoverButton({
  children,
  className,
  ...props // Capturar el resto de las props de botón (onClick, type, etc.)
}: SlideHoverButtonProps) {
  return (
    <button
      className={twMerge(
        "group relative h-12 w-40 overflow-hidden",
        "border border-primary-500", // Borde inicial
        "text-primary-500", // Color de texto inicial (asumiendo que quieres el color primario)
        "shadow-2xl transition-colors duration-300", // Sombra y transición para el color del texto

        // --- Pseudo Elemento 'before' (Efecto Slide) ---
        "before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48", // Tamaño y pos absoluta
        "before:origin-top-right", // Origen de transformación
        "before:bg-gray-900", // Color del elemento deslizante
        // Estado inicial (fuera, rotado)
        "before:-translate-x-full before:translate-y-12 before:-rotate-90",
        // Transición del pseudo-elemento
        "before:transition-all before:duration-300 before:ease-in-out", // Añadida función de temporización 'ease-in-out'

        // --- Estados Hover ---
        // No cambiar fondo ni borde del botón principal en hover
        "hover:shadow-black", // Cambiar sombra del botón en hover
        // Rotar el pseudo-elemento en hover para que cubra el botón
        "hover:before:-rotate-180",
        // El color del texto se cambia en el span usando group-hover

        // --- Clases Externas ---
        className // Fusionar con clases pasadas como prop
      )}
      {...props} // Aplicar otras props de botón
    >
      {/* Span para el contenido, asegurar que esté sobre el pseudo-elemento */}
      <span className="relative z-10 my-auto group-hover:text-white transition-colors duration-300"> {/* Aplicado group-hover aquí */}
        {children}
      </span>
    </button>
  );
}