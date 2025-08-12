import mongoose, { Document } from 'mongoose';
interface IStartup extends Document {
    name: string;
    founder: string;
    description: string;
    yearCreated: number;
    createdAt: Date;
}
declare const _default: mongoose.Model<IStartup, {}, {}, {}, mongoose.Document<unknown, {}, IStartup, {}, {}> & IStartup & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Startup.d.ts.map