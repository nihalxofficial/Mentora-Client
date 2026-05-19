export const getCourses = async(searchValue="")=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/courses?search=${searchValue}`);
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
export const getEnrollmentsByUserID = async(id, token)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/enrollments/${id}`,{
        headers: {
            authorization : `Bearer ${token}` || ""
        }
    });
    const course = await res.json();
    return course;
}