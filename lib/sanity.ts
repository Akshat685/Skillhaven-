// lib/sanity.ts
import { createClient } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-07-01",
  useCdn: true,
};

export const getClient = () => createClient(sanityConfig);
