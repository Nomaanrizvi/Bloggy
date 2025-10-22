import { Client, TablesDB, Storage, Query, ID } from "appwrite";

class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID)

        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    Title: title,
                    Content: content,
                    FeaturedImage: featuredImage,
                    status,
                    userId: userId
                }
            )
        } catch (error) {
            console.log('error:', error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                slug,
                {
                    Title: title,
                    Content: content,
                    FeaturedImage: featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log('error:', error)
            return null;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                slug
            )
            return true
        } catch (error) {
            console.log('error:', error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getRow(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                slug
            )
        } catch (error) {
            console.log('error:', error)
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listRows(
                import.meta.env.VITE_APPWRITE_DATABASE_ID,
                import.meta.env.VITE_APPWRITE_COLLECTION_ID,
                queries
            )

        } catch (error) {
            console.log('error:', error)
            return false
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('error:', error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                import.meta.env.VITE_APPWRITE_BUCKET_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log('error:', error)
            return false
        }
    }

    // Preview is paid
    // getFilePreview(fileId) {
    //     return this.bucket.getFilePreview(
    //         import.meta.env.VITE_APPWRITE_BUCKET_ID,
    //         fileId
    //     )
    // }

    getFile(fileId) {
        return this.bucket.getFileView(
            import.meta.env.VITE_APPWRITE_BUCKET_ID,
            fileId
        )
    }
}

const appWriteService = new Service()

export default appWriteService