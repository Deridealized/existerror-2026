export type VfxReel = {
  src: string;
  label: string;
  description: string;
  wide?: boolean;
};

// WEBM files served from /public/Videos/VFX/
export const vfxReels: VfxReel[] = [
  {
    src: "/Videos/VFX/programList.webm",
    label: "Programs",
    description:
      "Adobe suite, vegas, unity, blender, FL Studio plus many wierd and wonderful programs I've used over the years. (Maya shouldn't be in there as I haven't used it for a while, but I've no longer got AE access to update the reel!)",
    wide: true,
  },
  {
    src: "/Videos/VFX/lifestyle.webm",
    label: "Lifestyle",
    description: "Some iconography around my lifestyle and interests.",
    wide: true,
  },
  {
    src: "/Videos/VFX/3xexplosion.webm",
    label: "Explosion",
    description: "Main explosion effect, combined with camera shakes in game",
  },
  {
    src: "/Videos/VFX/beam.webm",
    label: "Beam",
    description: "Beam effect for fully upgraded snipers",
  },
  {
    src: "/Videos/VFX/blooddecal.webm",
    label: "Blood Decal",
    description:
      "Floor splats using masking, combined with blood and gore looks great",
  },
  {
    src: "/Videos/VFX/bloodsplat.webm",
    label: "Blood Splat",
    description: "Small blood splats that appear on surfaces",
  },
  {
    src: "/Videos/VFX/illustrateAnimate.webm",
    label: "Process",
    description: "Breakdown of how I created the (unofficial) ocado advert ->",
    wide: true,
  },
  {
    src: "/Videos/VFX/ocadoSting.webm",
    label: "Ocado Advert (Unofficial)",
    description:
      "My idea for a quick advert for Ocado online supermarket, made in my spare time for fun",
    wide: true,
  },
  {
    src: "/Videos/VFX/confetti.webm",
    label: "Confetti",
    description:
      " Celebratory confetti effect - highly re-usable across projects",
  },
  {
    src: "/Videos/VFX/electricity.webm",
    label: "Electricity",
    description: "Lightning and electrical discharge effects",
  },
  {
    src: "/Videos/VFX/fireexplosion.webm",
    label: "Fire Explosion",
    description:
      "Intense fire explosion with smoke and debris, covers the screen in flames",
  },
  {
    src: "/Videos/VFX/rocketrail.webm",
    label: "Rocket Trail",
    description: "Trail effect for rocket-propelled projectiles",
  },
  {
    src: "/Videos/VFX/gore.webm",
    label: "Gore",
    description:
      "Cartoony visceral gore effect, perfect for over-the-top violence",
  },
  {
    src: "/Videos/VFX/bloodspray.webm",
    label: "Blood Spray",
    description:
      "High-velocity blood spray effect, parents to enemies flying backwards showers the screen in juice",
  },
  {
    src: "/Videos/VFX/slow_steam.webm",
    label: "Steam (Slow)",
    description: "Slow-moving steam effect - atmospheric and versatile",
  },
  {
    src: "/Videos/VFX/vacuum1.webm",
    label: "Vacuum",
    description:
      "Suction effect for vacuum weapons, pulls pickups towards the player",
  },
  {
    src: "/Videos/VFX/muzzle.webm",
    label: "Muzzle Flash",
    description:
      "Muzzle flash effect for firearms - (doesn't look great in isolation but works well in-game with lighting and sound)",
  },
  {
    src: "/Videos/VFX/shells.webm",
    label: "Shell Casings",
    description: "Casings that eject from firearms, subtle eye candy",
  },
  {
    src: "/Videos/VFX/star.webm",
    label: "Star",
    description:
      "Star effect for upgrades and pickups, adds a nice pop to important moments",
  },
  {
    src: "/Videos/VFX/steam_fast.webm",
    label: "Steam (Fast)",
    description: "Fast-moving steam effect - dynamic and energetic",
  },

  {
    src: "/Videos/VFX/trailer1.webm",
    label: "In Action",
    description: "",
  },
  {
    src: "/Videos/VFX/trailer2.webm",
    label: "In Action",
    description: "",
  },
  {
    src: "/Videos/VFX/trailer3.webm",
    label: "In Action",
    description: "",
  },
  {
    src: "/Videos/VFX/trailer4.webm",
    label: "In Action",
    description: "",
  },
];
