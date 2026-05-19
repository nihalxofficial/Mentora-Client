export const addEnrollment = async(enrollData, id, token)=> {
    const res = await fetch(process.env.NEXT_PUBLIC_API+"/enrollments/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(enrollData)
    })
    const data = await res.json();
    return data;
}