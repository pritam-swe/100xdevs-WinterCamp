type CourseCardProps = {
    title: string;
    name: string;
    price: number
}


export function CourseCard(props: CourseCardProps) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>Instructor: {props.name}</p>
        <p>Price: {props.price}</p>
      </div>
    );
}


export default CourseCard