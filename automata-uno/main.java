package automata;

public class Automata {
    static int [][]matriz = {
        {1,200,200},
        {1,0,0}
    };

    public static void main(String[] args){
        Automata obj = new Automata();
        obj.inicio("total2");
    }

    public void inicio(String p){
        int i;
        char []c;
        int estado = 0;
        int caracter = 0;
        c = p.toCharArray();
        while (i < c.length){
            if(Character.isLetter(c[i])) caracter = 0;
            if(Character.isDigit(c{i})) caracter = 1;
            else caracter = 2;

            estado = matriz[estado][caracter];
            if(estado == 200){
                break;
            }

            i++;
        }
        if(estado == 1){
            System.out.println("Estado aceptado");
        }
        else{
            System.out.println("Estado no aceptado");
        }
    }
}