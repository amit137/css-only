
import Cubes from "../cubes/Cubes";
import Parallax from "../parallax/Parallax";
import TextReveal from "../textReveal/TextReveal";
import Water from "../water/Water";
import "./aboutMe.scss";





const AboutMe = () => {
  return (

   <div className="about">
   
    <div className="about-wrapper">
      <Water/>
    
      <h1 className="bg-heading">About Me{"/>"}</h1>
     
      <div className="about-code">
        <div className="class">
          <div className="code-l">
            {"  "}
            <span style={{ color: "#5918DF" }}>class</span>{" "}
            <span style={{ color: "gray" }}>Amit Singh</span> {"("}{" "}
          </div>
          <div className="code-l">
            {" "}
            <span className="dot"> {".."}</span>{" "}
            <span style={{ color: "#5918DF" }}>constructor </span>
            {"()"}
          </div>
          <div className="code-l">{"  "}
            <span className="dot">{"...."}</span>
            <span style={{ color: "maroon" }}>this</span>.
            <span style={{ color: "#6271de" }}>name</span>={" "}
            <span style={{ color: "#5a72c2" }}>'amit singh'</span> <br />{" "}
           {""} <span className="dot">{"...."}</span>
            <span style={{ color: "maroon" }}>this</span>.
            <span style={{ color: "#6271de" }}>email</span>=
            <span style={{ color: "#5a72c2" }}>'amitsin13701@gmail.com'</span>
            <br /> {")"}
          </div>
          <div className="code-l">
            <span className="dot">{".."}</span>{" "}
            <span style={{ color: "gray" }}>workExperience {"() {"}</span>
          </div>
          <div className="code-l">
            <span className="dot">{"...."}</span>
            <span style={{ color: "#5918DF" }}>return </span> {"["}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"} <span style={{ color: "#6271de" }}>'2020-now '</span> :{" "}
            <span style={{ color: "#5a72c2" }}>
              'Frontend Developer at Computer Society of India,Gzb'
            </span>
            {"}"}{" "}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"} <span style={{ color: "#6271de" }}>'2020-now '</span> :{" "}
            <span style={{ color: "#5a72c2" }}>
              'Frontend Developer at Computer Society of India,Gzb'
            </span>
            {"}"}{" "}
          </div>
          

          <div className="code-l">
            <span className="dot">{"...."}</span>
            {"]"} <br /> <span className="dot">{".."}</span>
            {"}"} <br />
          </div>
          <div className="code-l">
            <span className="dot">{".."}</span>{" "}
            <span style={{ color: "gray" }}>education {"() {"}</span>
          </div>
          <div className="code-l">
            <span className="dot">{"...."}</span>
            <span style={{ color: "#5918DF" }}>return </span> {"["}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"} <span style={{ color: "#6271de" }}>'2020-now'</span> :{" "}
            <span style={{ color: "#5a72c2" }}>
              'Ajay Kumar Garg Engineering College,Gzb - Computer Science(IT)
              - 7.53sgpa'
            </span>
            {"}"}{" "}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"} <span style={{ color: "#6271de" }}>'2018-2019'</span> :{" "}
            <span style={{ color: "#5a72c2" }}>
              'Kendriya Vidyalaya,RDSO Lucknow(12th) - 79.93%'
            </span>
            {"}"}{" "}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"} <span style={{ color: "#6271de" }}>'2016-2017'</span> :{" "}
            <span style={{ color: "#5a72c2" }}>
              'Kendriya Vidyalaya,RDSO Lucknow (10th) -10cgpa'
            </span>
            {"}"}{" "}
          </div>
          <div className="code-l">
            <span className="dot">{"...."}</span>
            <span className="dot">{"...."}</span> {"]"} <br />{" "}
            <span className="dot">{".."}</span>
            {"}"} <br />
          </div>
          <div className="code-l">
            <span className="dot">{".."}</span>{" "}
            <span style={{ color: "gray" }}>skills {"() {"}</span>
          </div>
          <div className="code-l">
            <span className="dot">{"...."}</span>
            <span style={{ color: "#5918DF" }}>return </span> {"["}
          </div>
          <div className="code-l">
            <span className="dot">{"....."}</span>
            {"{"}{" "}
            <span style={{ color: "#5a72c2" }}>
              'HTML/CSS','Bootstrap/Tailwind','SCSS','React','TypeScript','Motion-design',
              {<br />}
              'Git'Node.js','Express.js','Mongodb','SQL','C','CPP,'Python','AWS',
            </span>{" "}
          </div>

          <div className="code-l">
            <span className="dot">{"...."}</span>
            {"]"} <br /> <span className="dot">{".."}</span>
            {"}"} <br />
          </div>
          <div className="code-l">{"}"}</div>
        </div>
      </div>
    </div>
    {/* <TextReveal/> */}
  </div>

   
    
  );
};

export default AboutMe;
