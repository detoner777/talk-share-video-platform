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
        {/* -> */}
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
                      "https://nofilmschool.com/sites/default/files/styles/facebook/public/uploads/2014/04/cinema-lens.jpg?itok=dWQgUKep" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">Video shooting</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/shooting">
                    <a>
                      <h3 className="h1">Video tricks:</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
            {/* -> */}
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://blog.pond5.com/wp-content/uploads/2016/08/Screenwriting_Narrative_Arc.jpg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    Scripting ideas
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/scripting">
                    <a>
                      <h3 className="h1">Script notes</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
            {/* -> */}
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/33/2017/10/photo-1462926795244-b273f8a5454f-e1507212311767-630x361.jpg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">Gears</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/gears">
                    <a>
                      <h3 className="h1">Gears</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
            {/* -> */}
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unian.net/photos/2017_04/1491483849-9026-reproduktsiya-podolsko-voskresenskogo-mosta-foto-unian.jpg" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    Locations in Kiev
                  </h2>
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
            {/* -> */}

            {/* -> */}
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcfwSJf8sQbLLACLkOdAR7ygXuRCm39qyGQoXybuq-XRJqDai&s" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">
                    POST Production
                  </h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/post">
                    <a>
                      <h3 className="h1">Post</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
            {/* -> */}
            {/* -> */}
            <div className="col-md-4">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZNPtT3vOUkHFqXbHADba4KrQc7XUfXS2dJ4SucDjljS8tHBf&s" +
                      ")"
                  }}
                >
                  <h2 className="text-shadow text-center h1">Industry News</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/news">
                    <a>
                      <h3 className="h1">News</h3>
                    </a>
                  </Link>
                  <p className="lead">A bla-bla-bla text</p>
                </div>
              </div>
            </div>
            {/* -> */}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
