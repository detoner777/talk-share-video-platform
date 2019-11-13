import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 font-weight-bold">
                CONTENT CREATORS PLATFORM
              </h1>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-4 pb-5">
              <p className="lead">
                Best content creators platform, bla-bla-bla
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">Videos</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/videos">
                    <a>
                      <h3 className="h1">React Js</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">Locations</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/locations">
                    <a>
                      <h3 className="h1">Locations</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    Content creations
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/Content creations">
                    <a>
                      <h3 className="h1">Content creations</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
