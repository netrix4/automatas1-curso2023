using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.IO.Pipes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AutomatasCompilador
{
    public partial class MainForm : Form
    {
        StreamReader streamReader;
        OpenFileDialog openFileDialog;
        private string _TextFileContent = "";

        public MainForm()
        {
            InitializeComponent();
        }
        private void MainForm_Load(object sender, EventArgs e)
        {
            openFileDialog = new OpenFileDialog();
            openFileDialog.Title = "Open Text File";
            openFileDialog.Filter = "Text File | *.txt";
        }

        private void lblClose_Click(object sender, EventArgs e)
        {
            this.Close();
        }
        private void btnClean_Click(object sender, EventArgs e)
        {
            //streamReader = new StreamReader();
            _TextFileContent = "";
            lblFileContent.Text = "Aqui aparecerá el contenido del archivo de texto";
            lblFileName.Text = "Nombre del archivo: ";
        }

        private void btnFileLoad_Click(object sender, EventArgs e)
        {
            if (openFileDialog.ShowDialog() == DialogResult.OK )
            {
                streamReader = new StreamReader(openFileDialog.OpenFile());
                _TextFileContent = streamReader.ReadToEnd();
                streamReader.Close();

                //MessageBox.Show("Archivo abierto desde: ", openFileDialog.SafeFileName);

                lblFileName.Text = "Nombre del archivo: " + openFileDialog.SafeFileName;
                lblFileContent.Text = _TextFileContent;

            }
        }
    }
}
