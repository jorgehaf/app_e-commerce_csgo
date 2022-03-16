import repository from "../../repository";

const skins = {

    getSkins: async () => {
        try {
            const skins = await repository.skins.getSkins();
            return skins;
        } catch (err) {
            alert(err)
        }
    }

}

export default skins;