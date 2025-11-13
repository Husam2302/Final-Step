import apiEndpoint from "./APi/adpiEndpoints";
import { TokenApi } from "./APi/ApiClint";
// بيانات وهمية (ممكن تعدل عليها أو تزيدها)
const mockStudents = [
  {
    id: 1,
    name: "حسام ياسر شحادة عليان",
    Section: "علوم الحاسوب",
    studentid: "120220622077",
  },
  {
    id: 2,
    name: "ليان خالد العضايلة",
    Section: "علوم الحاسوب",
    studentid: "120220622065",
  },
  {
    id: 3,
    name: "محمد يوسف الرواشدة",
    Section: "بكالوريوس الذكاء الاصطناعي",
    studentid: "120220622062",
  },
  {
    id: 4,
    name: "سارة علي بني حسن",
    Section: "بكالوريوس نظم المعلومات الحاسوبية",
    studentid: "120220622061",
  },
];
const mockStudentSearchProject = [
  {
    name: "محمد خالد",
    university: "جامعة مؤتة - هندسة برمجيات",
    specialization: "طالب هندسة برمجيات",
    description: "أبحث عن فريق للعمل على مشروع تخرج في مجال الذكاء الاصطناعي.",
    semester: "الفصل الثاني",
    skills: ["Python", "TensorFlow", "React"],
  },
  {
    name: "ليان أحمد",
    university: "الجامعة الأردنية - نظم معلومات",
    specialization: "طالبة نظم معلومات",
    description: "لدي خبرة في تطوير تطبيقات الويب وأرغب في الانضمام إلى فريق.",
    semester: "الفصل الأول",
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    name: "محمد خالد",
    university: "جامعة مؤتة - هندسة برمجيات",
    specialization: "طالب هندسة برمجيات",
    description: "أبحث عن فريق للعمل على مشروع تخرج في مجال الذكاء الاصطناعي.",
    semester: "الفصل الثاني",
    skills: ["Python", "TensorFlow", "React"],
  },
  {
    name: "ليان أحمد",
    university: "الجامعة الأردنية - نظم معلومات",
    specialization: "طالبة نظم معلومات",
    description: "لدي خبرة في تطوير تطبيقات الويب وأرغب في الانضمام إلى فريق.",
    semester: "الفصل الأول",
    skills: ["Java", "Spring Boot", "SQL"],
  },
  {
    name: "محمد خالد",
    university: "جامعة مؤتة - هندسة برمجيات",
    specialization: "طالب هندسة برمجيات",
    description: "أبحث عن فريق للعمل على مشروع تخرج في مجال الذكاء الاصطناعي.",
    semester: "الفصل الثاني",
    skills: ["Python", "TensorFlow", "React"],
  },
  {
    name: "ليان أحمد",
    university: "الجامعة الأردنية - نظم معلومات",
    specialization: "طالبة نظم معلومات",
    description: "لدي خبرة في تطوير تطبيقات الويب وأرغب في الانضمام إلى فريق.",
    semester: "الفصل الأول",
    skills: ["Java", "Spring Boot", "SQL"],
  },
];
export const StudentService = {
  // 1. الدالة changeSearchTeam
  changeSearchTeam: async (userId, d) => {
    try {
      // FIX: يجب تمرير JSON Patch كـ مصفوفة (Array) من الكائنات
      const res = await TokenApi.patch(
        apiEndpoint.Student.ActivatSearshTeam(userId),
        // تمرير المصفوفة المطلوبة لعملية PATCH
        [{ op: "replace", path: "/ActivateStudent", value: d }]
      );
      return res.data;
    } catch (err) {
      // التعامل مع الأخطاء: إرجاع بيانات الاستجابة أو رسالة الخطأ
      if (err.response) throw err.response.data;
      else throw err.message;
    }
  },

  // 2. الدالة GetAll
  GetAll: async (search = "") => {
    try {
      const response = await TokenApi.get(apiEndpoint.Search.AdvancedSearch, {
        // FIX: لا يوجد خطأ نحوي، لكن هذا الترتيب هو الأفضل لـ Axios
        params: {
          SearchTerm: search,
          SearchStudents: true,
          SearchSupervisors: false,
          SearchProjects: false,
        },
      });
      // افتراض: ترجع API كائن data يحتوي على مصفوفة students
      return response.data.students;
    } catch (err) {
      if (err.response) throw err.response.data;
      else throw err.message;
    }
  },

  // 3. الدالة getStudentSearchProject
  getStudentSearchProject: async () => {
    try {
      const response = await TokenApi.get(
        apiEndpoint.Student.ActivatSearshTeam
      );
      return response.data;
    } catch (err) {
      if (err.response) throw err.response.data;
      else throw err.message;
    }
  },

  // 4. الدالة getStudantById (Mock API)
  //   getStudantById: async (id) => {
  //     const getStudantById = mockStudents.find((student) => student.id === id);
  //     if (!getStudantById) {
  //       throw new Error(`الطالب ذو المعرّف ${id} غير موجود.`);
  //     }
  //     return getStudantById;
  //   },
};
