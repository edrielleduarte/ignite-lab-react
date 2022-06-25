import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidabar } from "../components/Sidebar";
import { Video } from "../components/Video";




export function Event(){

    const { slug } = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex flex-1 flex-col md:flex-row">
                { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" /> }
                {/* <Video /> */}
                <Sidabar />
              </main>
              <Footer />
        </div>      
    )

}