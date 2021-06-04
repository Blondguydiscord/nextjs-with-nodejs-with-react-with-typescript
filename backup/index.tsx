import Link from 'next/link'

const checkLogin = "http://localhost:3030/public/checkLogin.tsx"

export default function Index({ todos}) {
  function Login(int:any){
    int = document.getElementById("usernamein") 
    if(int == "jaosasa"){
        console.log('correct')
    }   else{
        console.log('incorrect')
    }
  }

  return(
    <div>
      {todos.map((item)=>(
        <p key={item.id}>
          <Link href="/todo/{item.id}">
          <a>{item.title}</a>
          </Link>
        </p>
      ))}
      <div>
        <script src="../public/js/checkLogin.js"></script>
        <input type="text" placeholder="Username" id="usernamein" />
        <input type="submit" placeholder="Submit" onClick={Login}/>

      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3030/api/checkLogin.ts");
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};