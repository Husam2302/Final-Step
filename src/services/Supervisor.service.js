import apiEndpoint from "./APi/adpiEndpoints";
import { TokenApi } from "./APi/ApiClint";
const mockStudents = [
    {
        id: 1,
        name: "حسام ياسر شحادة عليان",
        section: "علوم الحاسوب",

    },
    {
        id: 2,
        name: "ليان خالد العضايلة",
        section: "علوم الحاسوب",

    },
    {
        id: 3,
        name: "محمد يوسف الرواشدة",
        section: "بكالوريوس الذكاء الاصطناعي",
    },
    {
        id: 4,
        name: "سارة علي بني حسن",
        section: "بكالوريوس نظم المعلومات الحاسوبية",
    },
];
export const SupervisorService = {
    GetAll: async () => {
        try {
            const response = await TokenApi.get(
                apiEndpoint.Supervisor.getAllSupervisors
            );
            return response.data;
        } catch (err) {
            if (err.response) throw err.response.data;
            else throw err.message;
        }

    }
};