import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { backend_api } from "../../../lib/constants/routes_constants";
import ArticleCard from "../../ui/articles/ArticleCard";
import CategoriesMobile from "../../ui/articles/CategoriesMobile";
import Container from "../../ui/layouts/Container";
import { TopHeader } from "../../ui/layouts/Headers";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${backend_api}`);
        const result = await response.json();
        setArticles(result);
      } catch (err) {
        throw err;
      }
    })();
  }, []);


  return (
    <IonPage>
      <TopHeader pageName={"Articles"} />
      <IonContent>
        <Container>
          <section className="md:flex mt-6 justify-between">
            <CategoriesMobile />
            <div className="container py-5 mx-auto">
              <h1 className="font-title text-typo text-xl font-semibold mb-6">
                All{" "}
              </h1>
              <div className="article-grid mb-12">
                {articles.map((el, index) => (
                  <ArticleCard
                    key={index}
                    title={el.title}
                    imageUrl={el.image}
                    content={el.summary}
                    date={el.datePublished}
                    href={`/articles/${el.articleRoute?.replace(".md", "")}`}
                    tags={el.tags}
                  />
                ))}
              </div>
            </div>
          </section>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default ArticlePage;
