import { Cards } from "./components/Card";
import { Profile } from "./components/Profile";
import { Form, HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Form action="">
        <div>
          <span>Publicações</span>
          <span> 6 publicações</span>
        </div>
        <input type="text" />
      </Form>
      <Cards/>
    </HomeContainer>
  )
}