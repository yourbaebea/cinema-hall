import React from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import Query from "./Query";

const PosterWrap = () => {
  const { id } = useParams();
  const id_data = id;
  const data = Query.queryDetailsPoster(id_data);
  return <Layout page="PosterDetails" id={id} data={data} />;
};

export default PosterWrap;
