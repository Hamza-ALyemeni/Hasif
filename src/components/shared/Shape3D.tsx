interface Shape3DProps {
  variant?: 'sphere' | 'cube' | 'torus' | 'pyramid';
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  color?: 'turquoise' | 'purple' | 'mixed';
}

export function Shape3D({ 
  variant = 'sphere', 
  size = 'md', 
  position = 'top-right',
  color = 'mixed'
}: Shape3DProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const positionClasses = {
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
    'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const colorClasses = {
    turquoise: 'bg-[#5DDCD1]',
    purple: 'bg-[#733A93]',
    mixed: 'bg-gradient-to-br from-[#5DDCD1] to-[#733A93]'
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} opacity-20 blur-2xl pointer-events-none`}>
      {variant === 'sphere' && (
        <div className={`w-full h-full rounded-full ${colorClasses[color]}`}></div>
      )}
      {variant === 'cube' && (
        <div className={`w-full h-full ${colorClasses[color]} rounded-3xl rotate-12`}></div>
      )}
      {variant === 'torus' && (
        <div className="relative w-full h-full">
          <div className={`absolute inset-0 ${colorClasses[color]} rounded-full`}></div>
          <div className="absolute inset-8 bg-[#0F1D2A] rounded-full"></div>
        </div>
      )}
      {variant === 'pyramid' && (
        <div className={`w-full h-full ${colorClasses[color]} rounded-3xl rotate-45`}></div>
      )}
    </div>
  );
}
