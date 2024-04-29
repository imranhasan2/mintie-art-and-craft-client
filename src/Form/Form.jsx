

const Form = () => {

    const handleAddData = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        console.log(photo, name, description)
        const craft = { photo, name, description, price }

        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
               form.reset()
            })

            



    }
    return (
        
           
            <div className="mx-auto" style={{ width: '400px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center" style={{ color: '#333', marginBottom: '20px' }}>Add Craft Item</h2>
                <form onSubmit={handleAddData}>
                    <input type="text" name="photo" placeholder="Photo URL" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <br />
                    <input type="text" name="name" placeholder="Title" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <br />
                    <input type="number" name="price" placeholder="Price" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <br />
                    <input type="text" name="description" placeholder="Description" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <br />
                    <input type="submit" value="ADD Data" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }} />
                </form>
            </div>
        
    );
};

export default Form;