"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const usernameRegex = /^pol01_.*$/;
    const passwordRegex = /^polpass0126_.*$/;

    if (usernameRegex.test(username) && passwordRegex.test(password)) {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "true", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
        });
        redirect("/admin/dashboard");
    } else {
        return { error: "Invalid credentials" };
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
    redirect("/admin/login");
}

export async function createProject(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const url = formData.get("url") as string;
    const tags = (formData.get("tags") as string).split(",").map((t) => t.trim());
    const category = formData.get("category") as string;
    const imageUrl = formData.get("imageUrl") as string;

    const { prisma } = require("@/lib/prisma");

    await prisma.project.create({
        data: {
            title,
            description,
            url,
            tags: JSON.stringify(tags), // Store as JSON string for SQLite simplicity
            category,
            imageUrl: imageUrl || null,
        },
    });

    redirect("/admin/dashboard");
}

export async function updateProjectOrder(items: { id: string; order: number }[]) {
    const { prisma } = require("@/lib/prisma");

    // Use a transaction to update all items
    await prisma.$transaction(
        items.map((item: any) =>
            prisma.project.update({
                where: { id: item.id },
                data: { order: item.order },
            })
        )
    );
}

export async function deleteProject(id: string) {
    const { prisma } = require("@/lib/prisma");
    await prisma.project.delete({
        where: { id },
    });
    redirect("/admin/dashboard");
}

export async function updateProject(id: string, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const url = formData.get("url") as string;
    const tags = (formData.get("tags") as string).split(",").map((t) => t.trim());
    const category = formData.get("category") as string;
    const imageUrl = formData.get("imageUrl") as string;

    const { prisma } = require("@/lib/prisma");

    await prisma.project.update({
        where: { id },
        data: {
            title,
            description,
            url,
            tags: JSON.stringify(tags),
            category,
            imageUrl: imageUrl || null,
        },
    });

    redirect("/admin/dashboard");
}

export async function submitProject(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const url = formData.get("url") as string;
    const category = formData.get("category") as string;
    // const contactEmail = formData.get("contactEmail") as string;
    // const isPremium = formData.get("isPremium") === "on";

    const { prisma } = require("@/lib/prisma");

    await prisma.project.create({
        data: {
            title,
            description,
            url,
            tags: JSON.stringify([]),
            category,
            approved: false,
        },
    });

    redirect("/submit/success");
}
