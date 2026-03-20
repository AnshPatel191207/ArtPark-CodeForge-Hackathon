import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const GlassCard = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      className={cn(
        "glass-card p-6",
        hover && "glass-card-hover",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NeonButton = ({ children, className, variant = 'primary', ...props }) => {
  const variants = {
    primary: "btn-neon-primary",
    secondary: "btn-neon-secondary",
    outline: "border border-white/20 hover:bg-white/5 text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(79, 70, 229, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};
