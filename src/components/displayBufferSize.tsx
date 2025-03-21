export default function ({ buffer,title="inside modal" }: { buffer: ArrayBuffer|null;title:string }) {
    if (buffer) {
        return <>  size: {buffer.byteLength}   ({title})</>
    }
    return <>size: 0 byte  ({title})</>
}