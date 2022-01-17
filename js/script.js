var project_list = []

fetch_data();
async function fetch_data() {
    response = await fetch('https://api.github.com/users/IsmaelCleiton/repos')
    data = await response.json();
    console.log(data);
    data.forEach(obj => {
        let project = {
            'name': '',
            'language': ''
        }
        Object.entries(obj).forEach(([key, value]) => {
            if (key == 'name') {
                project.name = value;
            }
            if (key == 'language') {
                project.language = value;
            }
            //console.log(`${key} ${value}`);
        });
        project_list.push(project);
        console.log('-------------------');
    })


}

