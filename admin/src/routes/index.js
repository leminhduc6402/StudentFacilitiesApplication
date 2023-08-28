import Class from "~/pages/Class";
import Credit from "~/pages/Credit";
import Dashboard from "~/pages/Dashboard";
import Department from "~/pages/Department";
import Login from "~/pages/Login";
import Major from "~/pages/Major";
import Room from "~/pages/Room";
import SchoolYear from "~/pages/SchoolYear";
import Subject from "~/pages/Subject";
import SubjectOfSchoolYear from "~/pages/SubjectOfSchoolYear";
import User from "~/pages/User";

export const routes = [
    {
        path: "/auth/login",
        component: Login,
    },
    {
        path: "/user",
        component: User,
    },
    {
        path: "/class",
        component: Class,
    },
    {
        path: "/department",
        component: Department,
    },
    {
        path: "/major",
        component: Major,
    },
    {
        path: "/room",
        component: Room,
    },
    {
        path: "/schoolyear",
        component: SchoolYear,
    },
    {
        path: "/credit",
        component: Credit,
    },
    {
        path: "/subject",
        component: Subject,
    },
    {
        path: "/sosy",
        component: SubjectOfSchoolYear,
    },
    {
        path: "/",
        component: Dashboard,
    },
];
