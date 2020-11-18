import './App.scss';

function renderingFeature() {
  const name = 'Easy Fontend';
  const age = 18;
  const isMale = true;

  const showStudent = false;
  const studentA = {
    name: 'Hung',
    age: 18,
    address: {
      city: 'SG',
    },
  };

  const studentList = [
    {
      id: 1,
      name: 'Hoang',
      age: 18,
    },
    {
      id: 2,
      name: 'Hau',
      age: 19,
    },
  ];

  const colorList = ['green', 'blue', 'red', 'deeppink'];
  return (
    <section className="app">
      <h1>Hello {name}</h1>
      <p>Age: {age + 2}</p>
      <p>Is Male: {isMale ? 'YES' : 'NO'}</p>
      <p>
        Render null/undefined: {null} {undefined}
      </p>

      {showStudent && (
        <>
          Name: {studentA.name} <br />
          Age: {studentA.age} <br />
          City: {studentA.address.city}
        </>
      )}
      {!showStudent && <p>Don&apos;t show student</p>}
      {true ? <p>OK</p> : null}
      {true ? <p>OK</p> : null}
      {true && <p> RENDER NE</p>}
      {false && <p>Don&apos;t show student nhe</p>}
      {null && <p>KHONG THAY RENDER NE</p>}
      {undefined && <p>KHONG THAY RENDER</p>}
      {!!0 && <p>0 ne</p>}
      {!!'' && <p>0 neb 1</p>}
      {!!'hello' && <p>HELLO</p>}

      <p>
        Name: {studentA.name} <br />
        Age: {studentA.age} <br />
        City: {studentA.address.city}
      </p>
      <ul className="student-list">
        {studentList.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <p>Name: {student.age}</p>
          </li>
        ))}
      </ul>

      <h2>Color List</h2>
      <ul className="color-list">
        {colorList.map((color) => (
          <li key={color} style={{ color }}>
            {color}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default renderingFeature;
