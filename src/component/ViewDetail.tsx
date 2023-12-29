import React from "react"
import { Books } from "./Book"

interface Prop{
    books: Books[]
}
const ViewDetail = ({books}:Prop)  => {
    return(
        <table>
            <thead>
                <tr>
                    <td>
                        Title
                    </td>
                    <td>
                        Author
                    
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
            </thead>
            <tbody>
                {books.map((item:{title:string,author:string,price:string}) => (
                    <tr>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.price}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    )
} 
export default ViewDetail;