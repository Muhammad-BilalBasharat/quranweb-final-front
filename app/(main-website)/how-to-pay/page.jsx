export function generateMetadata() {
  return {
    title: "How to Pay | Learn Quran Online",
    description: "Learn how to pay for Learn Quran Online services.",
  };
}


const HowToPayPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="border rounded-2xl shadow-md p-6 mb-6 bg-white">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Pay via Western Union</h2>
        <p className="mb-2">1. Visit your nearest Western Union branch or use their online platform.</p>
        <p className="mb-2">2. Send the payment to the following receiver details:</p>
        <ul className="list-disc list-inside mb-2 text-gray-700 ml-4">
          <li><strong>Name:</strong> [Your Full Name]</li>
          <li><strong>Country:</strong> [Your Country]</li>
          <li><strong>City:</strong> [Your City]</li>
        </ul>
        <p>3. After sending, share the MTCN (Money Transfer Control Number) with me via email or WhatsApp.</p>
      </div>

      <div className="border rounded-2xl shadow-md p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Pay via MoneyGram</h2>
        <p className="mb-2">1. Visit your nearest MoneyGram agent or use their online platform.</p>
        <p className="mb-2">2. Use the following receiver details:</p>
        <ul className="list-disc list-inside mb-2 text-gray-700 ml-4">
          <li><strong>Name:</strong> [Your Full Name]</li>
          <li><strong>Country:</strong> [Your Country]</li>
          <li><strong>City:</strong> [Your City]</li>
        </ul>
        <p>3. After the transfer, send me the reference number so I can verify and confirm your payment.</p>
      </div>
    </div>
  );
};

export default HowToPayPage;
