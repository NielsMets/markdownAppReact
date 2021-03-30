import marked from "marked";

function Output({ input }) {
  return (
    <section>
      <div className="section-heading">
        <h2>Output</h2>
      </div>
      <div
        className="output"
        dangerouslySetInnerHTML={{ __html: marked(input) }}
      ></div>
    </section>
  );
}

export default Output;
