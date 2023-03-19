import { Link } from "react-router-dom"

const date = new Date()
// const day = date.getDate()
// const month = date.getMonth()
const year = date.getFullYear()

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; { year }</p>
        <Link to="/terms">Terms & Condition</Link> &nbsp; &nbsp;
        <Link to="/privacy">Privacy Policy</Link>
    </footer>
  )
}

export default Footer