import React from "react";
import TemplateData from "./TemplateData";

let Template = ({
  filterBy,
  template,
  numberOfRecordsVistited,
  templatesPerPage,
}) => {
  //   const [templates, setTemplates] = useState(template.templateItems);

  console.log(template.templateItems);

  return (
    <>
      {/* {templates.map((template, i) => (
        <TemplateData key={i} template={template} />
      ))} */}

      {template.loading && <div>Loading...</div>}
      {!template.loading && template.error ? (
        <div> Error: {template.error}</div>
      ) : null}
      {!template.loading && template.templateItems.length
        ? template.templateItems
            .filter((template) =>
              filterBy ? template.name.includes(filterBy) : true
            )
            .slice(
              numberOfRecordsVistited,
              numberOfRecordsVistited + templatesPerPage
            )
            .map((template, i) => <TemplateData key={i} template={template} />)
        : null}
    </>
  );
};

Template = React.memo(Template);

export default Template;
