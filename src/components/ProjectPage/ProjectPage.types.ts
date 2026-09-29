export type ProjectRelatedProject = {
  image: string;
  title: string;
  category: string;
  to: string;
};

export interface ProjectPageProps {
  namespace: string;
  relatedProjects: ProjectRelatedProject[];
}
