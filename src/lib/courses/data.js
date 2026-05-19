export const getCourses = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/courses`);
    const courses = await res.json();
    return courses;
}

export const getFeaturedCourses = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/featured`);
    const courses = await res.json();
    return courses;
}

export const getCourseById = async(id, token)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/courses/${id}`,{
        headers: {
            authorization : `Bearer ${token}` || ""
        }
    });
    const course = await res.json();
    return course;
}