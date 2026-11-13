import { useState } from "react"

const courses = [
    {id: 1, title: "Full Stack", price: 2999},
    {id: 2, title: "Applied AI", price: 3999},
    {id: 3, title: "DSA", price: 4999}
]

export function CourseSelling() {
    const handleDelete(c: number) => {
        //filter
        courses.filter(c=>{
            courses.splice(c.id)
        })
    }
    const [loading, setLoading] = useState(false);
    if (loading) {
        return <p>Loading...</p>
    } else{
    return (
        <div>
            <h2>
                All courses ({courses.length})
            </h2>
            {/* {courses} */}
            {/* {JSON.stringify(courses)} */}
            {
                courses.map((course) => (
                    <div key={course.id} style={{borderBottom: "1px solid #eee", padding: "8px 0"}}>
                        <strong> {course.title} </strong>
                        <p> {course.price} </p>
                        <button onClick={handleDelete(course.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}}


export default CourseSelling