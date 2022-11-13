import React from "react";

const TemplateData = ({ template }) => {
  console.log(template);
  return (
    <section className="template_box">
      <article className="template_body">
        <h1>{template.name}</h1>
        <p>{template.description}</p>
      </article>
      <article className="template_footer">
        <a href={template.link} target="_blank" rel="noreferrer">
          Use Template
        </a>
      </article>
    </section>
  );
};

export default TemplateData;
