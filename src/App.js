import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
import Template from "./components/Template";
// import { createApi } from "@reduxjs/toolkit/query/react";
import { useDispatch, useSelector } from "react-redux";
import Search from "./components/search/Search";
import { fetchData } from "./components/templates/templateSlice";
import infoBadge from "./assets/images/infoBadge.svg";
import ReactPaginate from "react-paginate";
import Select from "./components/select/Select";

function App() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(0);
  const template = useSelector((state) => state.template);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const templatesPerPage = 15;
  const numberOfRecordsVistited = page * templatesPerPage;

  const totalPages = Math.ceil(
    template.templateItems.length / templatesPerPage
  );

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="landing">
      <header>
        <section className="search_landing">
          <Search filter={filter} setFilter={setFilter} />
          <div className="sort_landing">
            <p>Sort By: </p>
            <Select template={template} />
            <Select template={template} />
            <Select template={template} />
          </div>
        </section>
        <section className="bagde_landing">
          <img src={infoBadge} alt="info" />
          <span className="bagde_info">
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </span>
        </section>
      </header>
      <section>
        <article className="template_heading">
          <span>All Templates</span>
          <span>{template.templateItems.length || "0"} templates</span>
        </article>
        <article className="templates_space">
          <Template
            filterBy={filter}
            template={template}
            numberOfRecordsVistited={numberOfRecordsVistited}
            templatesPerPage={templatesPerPage}
          />
        </article>
      </section>
      <footer className="footer_pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next>"}
          pageCount={totalPages}
          onPageChange={changePage}
          containerClassName={"navigationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"navigationDisabled"}
          activeClassName={"navigationActive"}
        />

        {/* <span>Previous</span>
        <span>1 of 14</span>
        <span>Next {">"}</span> */}
      </footer>
    </div>
  );
}

export default App;
