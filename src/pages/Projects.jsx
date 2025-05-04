export default function Projects() {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">FusionViTNet for Carotid Artery Segmentation</h3>
          <p>Hybrid ViT + CNN model for ultrasound segmentation with SAM-style prompting.</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">Diabetic Sock Thermal System Modeling</h3>
          <p>Developed thermal simulations in ANSYS to optimize sensor placements.</p>
        </li>
      </ul>
    </section>
  );
}