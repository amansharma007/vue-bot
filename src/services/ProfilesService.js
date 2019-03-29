import axios from 'axios';
const url = 'http://localhost:5000/api/profiles/';

class ProfilesService {
    //Get Profiles
    static getProfiles() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(profile => {
                        let date = new Date(profile.createdAt)
                        return {
                            ...profile,
                            createdAt: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
                        }
                    })
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    //Create Profiles
    static insertProfile(profile){
        return axios.post(url, {
            profile: profile
        })
    }

    //Delete Profiles
    static deleteProfile(id){
        return axios.delete(`${url}${id}`);
    }
}

export default ProfilesService;