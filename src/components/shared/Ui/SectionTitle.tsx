const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl text-center">
        {text}
      </h2>
      <div className="mb-10 h-1 w-20 bg-primary mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
