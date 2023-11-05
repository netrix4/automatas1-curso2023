namespace AutomatasCompilador
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.gbFileLoad = new System.Windows.Forms.GroupBox();
            this.btnFileLoad = new System.Windows.Forms.Button();
            this.lblFileLoad = new System.Windows.Forms.Label();
            this.gbFileContent = new System.Windows.Forms.GroupBox();
            this.lblFileContent = new System.Windows.Forms.Label();
            this.btnClean = new System.Windows.Forms.Button();
            this.lblClose = new System.Windows.Forms.Button();
            this.lblFileName = new System.Windows.Forms.Label();
            this.gbFileLoad.SuspendLayout();
            this.gbFileContent.SuspendLayout();
            this.SuspendLayout();
            // 
            // gbFileLoad
            // 
            this.gbFileLoad.Controls.Add(this.btnFileLoad);
            this.gbFileLoad.Controls.Add(this.lblFileLoad);
            this.gbFileLoad.Dock = System.Windows.Forms.DockStyle.Top;
            this.gbFileLoad.Location = new System.Drawing.Point(0, 0);
            this.gbFileLoad.Name = "gbFileLoad";
            this.gbFileLoad.Size = new System.Drawing.Size(426, 55);
            this.gbFileLoad.TabIndex = 0;
            this.gbFileLoad.TabStop = false;
            this.gbFileLoad.Text = "Cargar Archivo";
            // 
            // btnFileLoad
            // 
            this.btnFileLoad.Location = new System.Drawing.Point(291, 18);
            this.btnFileLoad.Name = "btnFileLoad";
            this.btnFileLoad.Size = new System.Drawing.Size(75, 23);
            this.btnFileLoad.TabIndex = 1;
            this.btnFileLoad.Text = "Cargar";
            this.btnFileLoad.UseVisualStyleBackColor = true;
            this.btnFileLoad.Click += new System.EventHandler(this.btnFileLoad_Click);
            // 
            // lblFileLoad
            // 
            this.lblFileLoad.Location = new System.Drawing.Point(58, 18);
            this.lblFileLoad.Name = "lblFileLoad";
            this.lblFileLoad.Size = new System.Drawing.Size(227, 23);
            this.lblFileLoad.TabIndex = 0;
            this.lblFileLoad.Text = "Seleccionar archivo de texto:";
            this.lblFileLoad.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // gbFileContent
            // 
            this.gbFileContent.Controls.Add(this.lblFileName);
            this.gbFileContent.Controls.Add(this.lblFileContent);
            this.gbFileContent.Location = new System.Drawing.Point(0, 61);
            this.gbFileContent.Name = "gbFileContent";
            this.gbFileContent.Size = new System.Drawing.Size(426, 301);
            this.gbFileContent.TabIndex = 0;
            this.gbFileContent.TabStop = false;
            this.gbFileContent.Text = "Contenido Archivo";
            // 
            // lblFileContent
            // 
            this.lblFileContent.Location = new System.Drawing.Point(3, 41);
            this.lblFileContent.Name = "lblFileContent";
            this.lblFileContent.Size = new System.Drawing.Size(420, 257);
            this.lblFileContent.TabIndex = 3;
            this.lblFileContent.Text = "Aqui aparecerá el contenido del archivo de texto";
            this.lblFileContent.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // btnClean
            // 
            this.btnClean.Location = new System.Drawing.Point(258, 368);
            this.btnClean.Name = "btnClean";
            this.btnClean.Size = new System.Drawing.Size(75, 23);
            this.btnClean.TabIndex = 2;
            this.btnClean.Text = "Limpiar";
            this.btnClean.UseVisualStyleBackColor = true;
            this.btnClean.Click += new System.EventHandler(this.btnClean_Click);
            // 
            // lblClose
            // 
            this.lblClose.Location = new System.Drawing.Point(339, 368);
            this.lblClose.Name = "lblClose";
            this.lblClose.Size = new System.Drawing.Size(75, 23);
            this.lblClose.TabIndex = 3;
            this.lblClose.Text = "Salir";
            this.lblClose.UseVisualStyleBackColor = true;
            this.lblClose.Click += new System.EventHandler(this.lblClose_Click);
            // 
            // lblFileName
            // 
            this.lblFileName.Location = new System.Drawing.Point(12, 18);
            this.lblFileName.Name = "lblFileName";
            this.lblFileName.Size = new System.Drawing.Size(402, 23);
            this.lblFileName.TabIndex = 4;
            this.lblFileName.Text = "Nombre del archivo:";
            this.lblFileName.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(426, 403);
            this.Controls.Add(this.lblClose);
            this.Controls.Add(this.btnClean);
            this.Controls.Add(this.gbFileContent);
            this.Controls.Add(this.gbFileLoad);
            this.Name = "MainForm";
            this.Text = "Pantalla Principal";
            this.Load += new System.EventHandler(this.MainForm_Load);
            this.gbFileLoad.ResumeLayout(false);
            this.gbFileContent.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox gbFileLoad;
        private System.Windows.Forms.Button btnFileLoad;
        private System.Windows.Forms.Label lblFileLoad;
        private System.Windows.Forms.GroupBox gbFileContent;
        private System.Windows.Forms.Button btnClean;
        private System.Windows.Forms.Button lblClose;
        private System.Windows.Forms.Label lblFileContent;
        private System.Windows.Forms.Label lblFileName;
    }
}

