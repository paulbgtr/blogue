import { Dashboard as Container } from "@/components/containers/Dashboard";
import { BlogPostList } from "@/pageComponents/dashboard/BlogPostLits";

const Dashboard = () => {
  return (
    <Container>
      <BlogPostList />
    </Container>
  );
};

export default Dashboard;
