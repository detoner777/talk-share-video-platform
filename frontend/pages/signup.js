import Layout from "../components/Layout";
import Link from "next/link";

const Signup = ({ children }) => {
  return (
    <Layout>
      <h2>Signup</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default Signup;
