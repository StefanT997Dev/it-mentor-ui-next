import { MentorRegisterDto } from "@/models/mentorRegisterDto";
import { useStore } from "@/stores/store";

const RegisterPage = () =>{
    const {
        dataStore: { registerMentor }
    } = useStore();

    const tryRegisterMentor = async (values: MentorRegisterDto) => {
        try {
            await registerMentor(values)
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div></div>
    );
}

export default RegisterPage;