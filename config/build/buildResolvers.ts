import  { ResolveOptions }  from 'webpack';
export function buildResolvers(): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: {},
    }
}