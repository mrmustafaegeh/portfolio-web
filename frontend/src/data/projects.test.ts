import { describe, it, expect } from "vitest";
import { getFilteredProjects } from "./projects";
import { Project } from "../types/project";

describe("getFilteredProjects logic", () => {
  const mockProjects: Project[] = [
    { id: 1, title: "P1", tech: ["react"], featured: true, src: "", alt: "", gitHub: "", description: "" },
    { id: 2, title: "P2", tech: ["nextjs"], featured: false, src: "", alt: "", gitHub: "", description: "" },
    { id: 3, title: "P3", tech: ["react", "javascript"], featured: false, src: "", alt: "", gitHub: "", description: "" },
  ];

  it("should return all projects when filter is 'all'", () => {
    const result = getFilteredProjects(mockProjects, "all");
    expect(result).toHaveLength(3);
  });

  it("should return only featured projects when filter is 'featured'", () => {
    const result = getFilteredProjects(mockProjects, "featured");
    expect(result).toHaveLength(1);
    expect(result[0]?.title).toBe("P1");
  });

  it("should filter by technology correctly", () => {
    const reactResult = getFilteredProjects(mockProjects, "react");
    expect(reactResult).toHaveLength(2);
    
    const nextResult = getFilteredProjects(mockProjects, "nextjs");
    expect(nextResult).toHaveLength(1);
    expect(nextResult[0]?.title).toBe("P2");
  });

  it("should return empty array for non-existent tech", () => {
    const result = getFilteredProjects(mockProjects, "vue");
    expect(result).toHaveLength(0);
  });
});
