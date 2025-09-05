function getStudentSummary(student){
    const { name, age, listMonhoc } = student;

    const total = listMonhoc.reduce((sum, item) => sum + item.score, 0);
    const avg = +(total / listMonhoc.length).toFixed(2);

    let rating;
    if(avg >= 8.5){
        rating = "Học sinh giỏi";
    }else if(avg >= 7){
        rating = "Học sinh khá";
    }else if(avg >= 5){
        rating = "Học sinh trung bình";
    }else{
        rating = "Học sinh yếu";
    }

    let bestMonHoc = listMonhoc[0];
    for (let i = 1; i < listMonhoc.length; i++) {
        const currentMonHoc = listMonhoc[i];
        if(currentMonHoc.score > bestMonHoc.score){
            bestMonHoc = currentMonHoc;
        }
    }

    let worstMonHoc = listMonhoc[0];
    for (let i = 1; i < listMonhoc.length; i++) {
        const currentMonHoc = listMonhoc[i];
        if(currentMonHoc.score < worstMonHoc.score){
            worstMonHoc = currentMonHoc;
        }
    }

    const subjectDetails = listMonhoc.map(item => `${item.subject}: ${item.score}`).join(", ");

    return `${name} is ${age} years old.
            Average score: ${avg} -> ${rating}
            Best subject: ${bestMonHoc.subject} (${bestMonHoc.score}).
            Weakest subject: ${worstMonHoc.subject} (${worstMonHoc.score}).`;
}

console.log(getStudentSummary({
  name: "Dev",
  age: 20,
  listMonhoc: [
    { subject: "Math", score: 9 },
    { subject: "English", score: 7.5 },
    { subject: "Physics", score: 6 },
    { subject: "Literature", score: 8.5 }
  ]
}));
